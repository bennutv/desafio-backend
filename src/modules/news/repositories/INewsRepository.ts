import { INewsDTO } from "../entities/dto/INewsDTO";
import { INewsListDTO } from "../entities/dto/INewsLitsDTO";

interface INewsRepository {
  findById(id: string): Promise<INewsDTO>;
  list(): Promise<INewsListDTO[]>;
}

export { INewsRepository };
