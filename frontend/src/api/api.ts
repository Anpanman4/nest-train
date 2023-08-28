interface IUser {
  username: string;
  password: string;
  name: string;
  surname: string;
}

class Api {
  private link: string;
  private authToken: string;
  constructor(link: string) {
    this.link = link;
    this.authToken = "";
  }
  private checkResponse(res: Response) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

  public setAuthToken(token: string): void {
    this.authToken = token;
  }

  public login = async (body: IUser): Promise<string> => {
    console.log(body);
    const response = await fetch(`${this.link}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const answer = this.checkResponse(response);
    console.log(answer);
    return answer;
  };

  public async getAllTodos() {
    const response = await fetch(`${this.link}/todos`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.authToken}`,
      },
      next: {
        revalidate: 60,
      },
    });
    return this.checkResponse(response);
  }
}

export default new Api("http://localhost:5000");
