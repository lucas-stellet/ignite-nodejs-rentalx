import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../../repositories/ICategoriesRepository";

class CreateCategoryUseCase {
  constructor(private repository: ICategoriesRepository) {}

  execute({ name, description }: ICreateCategoryDTO): void {
    const categoriesRepository = this.repository;

    const categoryAlreadyExists = categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("category already exists");
    }

    categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
