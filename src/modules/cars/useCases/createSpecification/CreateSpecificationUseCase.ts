import {
  ISpecificationsRepository,
  ICreateSpecificationDTO,
} from "../../repositories/ISpecificationsRepository";

class CreateSpecificationUseCase {
  constructor(private repository: ISpecificationsRepository) {
    this.repository = repository;
  }

  execute({ name, description }: ICreateSpecificationDTO): void {
    const specificationRepository = this.repository;

    const specificationAlreadyExists = specificationRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error("specification already exists");
    }

    specificationRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };
