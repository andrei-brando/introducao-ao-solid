import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  public execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id);

    if (!user) throw new Error("Usuário informado não existe");

    return this.usersRepository.turnAdmin(user);
  }
}

export { TurnUserAdminUseCase };
