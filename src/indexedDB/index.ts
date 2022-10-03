
import resolveRequest from './resolveRequest'

class DB {
  private dbName: string
  private db: IDBDatabase | null = null
  constructor (dbName: string) {
    this.dbName = dbName
  }
  public openStore (storeName: string, keyPath: string, indexArray?: string[]) {
    // 1、链接数据库
    const request = window.indexedDB.open(this.dbName, 1)
    // 数据库更新成功
    request.onupgradeneeded = (event: any) => {
      console.log('数据库更新成功', event)
      const db: IDBDatabase = event.target.result
      // 在数据库中创建 对象仓库
      const store = db.createObjectStore('Person', { keyPath: 'id', autoIncrement: true })
      indexArray?.map(key => {
        store.createIndex(key, key, { unique: false })
      })
      // 判断是否db是否创建成功
      store.transaction.oncomplete = (event) => {
        console.log('对象仓库创建成功')
      }
    }
    
    // 数据库打开成功
    request.onsuccess = (event: any) => {
      console.log('数据库打开成功', event)
      this.db = event.target.result
    }
    // 数据库打开失败
    request.onerror = (event: any) => {
      console.error('数据库打开失败', event)
    }
  }

  // 3、数据的增删改查
  // 增 改
  public updateItem (storeName: string, data: any) {
    if (!this.db) return
    const tx = this.db.transaction(storeName, 'readwrite')
    const store = tx.objectStore(storeName)
    const request = store.put({
      ...data,
      updateTime: new Date().getTime()
    })
    resolveRequest(request, (event: any) => {
      console.log('数据写入成功', event)
    }, (err: any) => {
      console.error('数据写入失败', err)
    })
  }

  // 删除
  public deleteItem (storeName: string, id: string | number) {
    if (!this.db) return
    const tx = this.db.transaction(storeName, 'readwrite')
    const store = tx.objectStore(storeName)
    const request = store.delete(id)
    resolveRequest(request, (event: any) => {
      console.log('数据删除成功', event)
    }, (err: any) => {
      console.error('数据删除失败', err)
    })
  }

  // 查询
  public getAll (storeName: string) {
    if (!this.db) return
    const tx = this.db.transaction(storeName, 'readwrite')
    const store = tx.objectStore(storeName)
    const request = store.getAll()
    resolveRequest(request, (event: any) => {
      console.log('数据查询成功', event.target.result)
    }, (err: any) => {
      console.error('数据查询失败', event)
    })
  }

  public getItem (storeName: string, id: string | number) {
    if (!this.db) return
    const tx = this.db.transaction(storeName, 'readwrite')
    const store = tx.objectStore(storeName)
    const request = store.get(id)
    resolveRequest(request, (event: any) => {
      console.log('数据查询成功', event.target.result)
    }, (err: any) => {
      console.error('数据查询失败', event)
    })
  }
}

export default DB