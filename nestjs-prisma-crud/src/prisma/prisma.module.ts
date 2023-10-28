import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma.service";

@Module({
    // Ponemos lo que queremos importar
    providers:[PrismaService],
    exports:[PrismaService]
})

export class PrismaModule {}