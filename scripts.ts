import { PrismaClient } from '@prisma/client'
import { hash, verify } from 'argon2'

const prisma = new PrismaClient()

/** 创建用户 */
async function createUser() {
  try {
    const password = 'youzhi..'
    const res = await prisma.user.create({
      data: {
        username: '李四',
        password: await hash(password),
      },
    })
    console.log('创建用户成功！', res)
  } catch (error) {
    console.log('创建用户出现错误！', error)
  }
}

// createUser()

/** 查找所有用户 */
async function findUser() {
  try {
    const res = await prisma.user.findMany({
      include: {
        articles: true,
      },
    })
    console.log(JSON.stringify(res, null, 2))
  } catch (error) {
    console.log('查询文章失败！', error)
  }
}

// findUser();

/** 创建文章 */
async function createArticle() {
  try {
    const res = await prisma.article.create({
      data: {
        title: '文章1',
        content: 'hahahahhahahahahh',
        authorId: 1,
      },
    })
    console.log('创建文章成功！', res)
  } catch (error) {
    console.log('创建文章出现错误！', error)
  }
}

// createArticle();

/** 查找所有文章 */
async function findArticle() {
  try {
    const res = await prisma.article.findMany({
      include: {
        author: true,
      },
    })
    console.log('查询文章成功！', res)
  } catch (error) {
    console.log('查询文章出现错误！', error)
  }
}

// findArticle();

/** 对比密码 */
async function verifyPassword() {
  const password = 'youzhi..'
  const user = await prisma.user.findUnique({
    where: {
      username: '李四',
    },
  })
  if (user) {
    console.log(await verify(user.password, password))
  }
}

// verifyPassword()
