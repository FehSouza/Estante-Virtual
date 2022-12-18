class CustomStorage {
  storage: Storage

  constructor(storage: Storage) {
    this.storage = storage
  }

  getItem(key: string) {
    const value = this.storage.getItem(key)
    if (!value) return

    return JSON.parse(value)
  }

  setItem(key: string, value: unknown) {
    this.storage.setItem(key, JSON.stringify(value))
  }

  deleteItem(key: string) {
    this.storage.removeItem(key)
  }
}

export const customStorage = new CustomStorage(localStorage)
