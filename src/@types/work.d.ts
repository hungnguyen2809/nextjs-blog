declare namespace Work {
  interface WorkInfo {
    id: string;
    title: string;
    createdAt: number;
    updatedAt: number;
    tagList: string[];
    thumbnailUrl: string;
    fullDescription: string;
    shortDescription: string;
  }
}
