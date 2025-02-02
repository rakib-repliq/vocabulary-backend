/* eslint-disable no-unused-vars */
import { Model } from 'mongoose'

import { USER_ROLE } from './user.constant'

export type TUser = {
  _id: string
  name: string
  email: string
  photo: string
  password: string
  role: 'user' | 'admin'
}

export interface UserModel extends Model<TUser> {
  // Check if the user exists
  isUserExists(email: string): Promise<TUser>

  // Compare the plain text password with the hashed password
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>
}

export type TUserRole = keyof typeof USER_ROLE
