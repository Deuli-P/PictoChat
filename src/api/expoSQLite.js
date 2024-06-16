async function openDatabase(){
    if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'data')).exists) {
      await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'data');
    }
    await FileSystem.downloadAsync(
      Asset.fromModule(require(pathToDatabaseFile)).uri,
      FileSystem.documentDirectory + 'data/db.sqlite'
    );
    return SQLite.openDatabase('db.sqlite');
  }




