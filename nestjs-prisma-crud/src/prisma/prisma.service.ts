import { Injectable, OnModuleInit } from "@nestjs/common";
import {PrismaClient} from "@prisma/client";

// Como es un servicio inyectable agregamos esta anotacion 
@Injectable()
// Ejecuta codigo apenas llamemos la clase
export class PrismaService extends PrismaClient implements OnModuleInit {
    async onModuleInit() {
        await this.$connect();
    }
}