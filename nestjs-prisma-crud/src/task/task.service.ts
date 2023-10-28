import {Injectable} from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import {Task} from "@prisma/client";

@Injectable()

export class TaskService{
    constructor(private prisma:PrismaService){}
        
    // Funcion asicrona para tomar todos los datos de la tabla y que los retorne como una lista
    async getAllTask(): Promise<Task[]>{
        return this.prisma.task.findMany();
    }

    async getTaskById(id:number): Promise<Task>{
        return this.prisma.task.findUnique({
            where: {
                id
            }
        });
    }

    async createTask(data:Task): Promise<Task>{
        return this.prisma.task.create({
            data
        })
    }

    async updateTask(id:number,data:Task): Promise<Task>{
        return this.prisma.task.update({
            where:{
                id
            },
            data
        });
    }

    async deleteTask(id:number): Promise<Task>{
        return this.prisma.task.delete({
            where:{
                id
            }
        });
    }
}