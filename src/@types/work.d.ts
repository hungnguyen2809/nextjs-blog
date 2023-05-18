declare namespace Work {
  interface WorkInfo {
    id: number;
    title: string;
    tags?: string[];
    createAt?: string;
    updateAt?: string;
    thumnailUrl: string;
    description: string;
    fullDescription?: string;
  }
}
