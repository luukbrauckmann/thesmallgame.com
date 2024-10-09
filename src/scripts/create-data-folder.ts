import { existsSync } from 'fs';
import { mkdir, readdir, rm } from 'fs/promises';

const dataDir = '.data';

export default async function () {
  if (!existsSync(dataDir)) {
    await mkdir(dataDir);
  } else {
    const files = await readdir(dataDir);
    files.forEach(async (file) => {
      const filePath = `${dataDir}/${file}`;
      await rm(filePath, { recursive: true, force: true });
    });
  }
}
