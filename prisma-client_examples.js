const { prisma } = require('./generated/prisma-client')

// A `main` function so that we can use async/await
async function main() {

  // Create a new user called `Alice`
  const newUser = await prisma.createUser({ name: 'Alice' })
  console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`)

  // Read all users from the database and print them to the console
  const allUsers = await prisma.users()
  console.log(allUsers)

  const user = await prisma
  .user({ id: 'cjswu95yd003y0825o4f4prnf' })
  console.log(user)

  const usersCalledAlice = await prisma
  .users({
    where: {
      name: 'Alice'
    }
  })
  console.log(usersCalledAlice)

  const updatedUser = await prisma
  .updateUser({
    where: { id: 'cjswtz9a1002o0825ohd57o5a' },
    data: { name: 'Bob' }
  })
  console.log(updatedUser)

  const deletedUser = await prisma
  .deleteUser({ id: 'cjswtzcx6002x0825f6yqy7eq' })
  console.log(deletedUser)
}

main().catch(e => console.error(e))