import { PrismaClient } from "@prisma/client";
import { links } from "../data/links";

const prisma = new PrismaClient

async function main() {
    await prisma.user.create({
        data: {
            email: "prisma.test@yopmail.com",
            role: 'ADMIN'
        }
    })

    await prisma.link.createMany({
        data: links
    })
}

main()
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })