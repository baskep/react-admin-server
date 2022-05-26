import { Controller, Get, Post, Req, UseBefore } from 'routing-controllers'
import { Request } from 'koa'
import _ from 'lodash'

import BaseController from './base'
import { LoginMiddleware } from '../middlewares'
import { UserModel } from '../models'
import { ERRORS } from '../constants'

type resultType = {
  data: any,
  msg: string,
  status: number
}

@UseBefore(LoginMiddleware)
@Controller()
class UserController extends BaseController {
  @Post('/user/create')
  async addUserInfo(@Req() req: Request): Promise <resultType> {
    try {
      const { username, mobile, password } = req.body
      const isExist = await UserModel.queryOne(username)
      if (isExist) {
        return this.showError({}, ERRORS.NAME_ISEXIST)
      }
      const insertId = await UserModel.addUserInfo(Number(mobile), username, password)
      if (!insertId) {
        return this.showError({}, ERRORS.ADD_USER_ERROR)
      }
      return this.showResult({}, '新增账号成功')
    } catch (e) {
      return this.showError({}, ERRORS.INTERNAL_ERROR)
    }
  }

  @Post('/user/info')
  async updateUserInfo(@Req() req: Request): Promise <resultType> {
    try {
      const { id, username, mobile, password, isNameChange } = req.body
      if (isNameChange) {
        const isExist = await UserModel.queryOne(username)
        if (isExist) {
          return this.showError({}, ERRORS.NAME_ISEXIST)
        }
      }
      const res = await UserModel.updateUserInfo(id, Number(mobile), username, password)
      if (res === 1) {
        return this.showResult({}, '修改账号信息成功')
      }
      return this.showError({}, ERRORS.UPDATE_NO_DATA_ERROR)
    } catch (e) {
      return this.showError({}, ERRORS.INTERNAL_ERROR)
    }
  }

  @Get('/user/list')
  async getUserList(@Req() req: Request): Promise <resultType> {
    try {
      const { pageNum, pageSize, username, mobile, status } = req.query as any
      const { result } = await UserModel.getUserList(
        Number(pageNum),
        Number(pageSize),
        Number(mobile), 
        Number(status),
        username, 
      )
      const { total } = await UserModel.getUserList(
        Number(1),
        Number(1000),
        Number(mobile), 
        Number(status),
        username, 
      )
      return this.showResult({ result, total }, '操作成功')
    } catch (e) {
      return this.showError({}, ERRORS.INTERNAL_ERROR)
    }
  }

  @Post('/user/status')
  async setUserStatus(@Req() req: Request): Promise <resultType> {
    try { 
      const { status, selectedRowKeys} = req.body as any
      await UserModel.setUserStatus(status, selectedRowKeys)
      return this.showResult({}, '操作成功')
    } catch (e) {
      return this.showError({}, ERRORS.INTERNAL_ERROR)
    }
  }
}

export default UserController
