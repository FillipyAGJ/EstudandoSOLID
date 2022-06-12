import { SpecificationsRepository } from "../../repositories/Implementations/SpecificationsRepository";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";
import { ListSpecificationsController } from "./listSpecificationsController";

const specificationsRepository = SpecificationsRepository.getInstance();
const listSpecificationsUseCase = new ListSpecificationsUseCase(specificationsRepository);
const listSpecificationsController = new ListSpecificationsController(listSpecificationsUseCase);

export { listSpecificationsController };