import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function createUser() {
  try {
    const res = await prisma.user.create({
      data: {
        username: '张三',
        password: 'youzhi..',
      },
    });
    console.log('创建用户成功！', res);
  } catch (error) {
    console.log('创建用户出现错误！', error);
  }
}

// createUser();

async function findUser() {
  try {
    const res = await prisma.user.findMany({
      include: {
        articles: true,
      },
    });
    // console.log(JSON.stringify(res, null, 2));
  } catch (error) {
    console.log('查询文章失败！', error);
  }
}

// findUser();

async function createArticle() {
  try {
    const res = await prisma.article.create({
      data: {
        title: '文章1',
        content: 'hahahahhahahahahh',
        authorId: 1,
      },
    });
    console.log('创建文章成功！', res);
  } catch (error) {
    console.log('创建文章出现错误！', error);
  }
}

// createArticle();

async function findArticle() {
  try {
    const res = await prisma.article.findMany({
      include: {
        author: true,
      },
    });
    console.log('查询文章成功！', res);
  } catch (error) {
    console.log('查询文章出现错误！', error);
  }
}

// findArticle();
