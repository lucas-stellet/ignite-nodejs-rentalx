import { Category } from "../../model/Category";
import { ICategoriesRepository } from "../../repositories/implementations/ICategoriesRepository";

class ListCategoriesUseCase {
  constructor(private repository: ICategoriesRepository) {}

  execute(): Category[] {
    const categories = this.repository.list();
    return categories;
  }
}

export { ListCategoriesUseCase };
