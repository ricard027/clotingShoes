interface User {
  firstName: String
  lastName: String
  email: String
  provider: 'firebase' | 'google'
}
export default User
