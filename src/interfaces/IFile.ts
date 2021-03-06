export interface IFile {
  content: string;
  extension: string;
  path: string;
  name: string;
  [key: string]: string;
}
