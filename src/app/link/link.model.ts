export class Link {
  title: string;
  link: string;
  votes: number;
  // votes?:number (el signo "?" indica que ese atributo es opcional)
  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }

  voteUp() {
    this.votes++;
  }

  voteDown() {
    this.votes--;
  }
}
