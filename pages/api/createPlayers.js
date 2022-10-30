import { prisma } from '../prisma';
  prisma.player.create({
    data: {
      name: 'Gose',
      money: 1500,
      isOnTurn: false
    }
  })
  prisma.player.create({
    data: {
      name: 'Dame',
      money: 1500,
      isOnTurn: false
    }
  })

  const players = await prisma.player.findMany();
