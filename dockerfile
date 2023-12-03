# Gunakan image Node.js LTS Alpine sebagai dasar
FROM node:lts-alpine

# Set direktori kerja di dalam container
WORKDIR /usr/src/app

# Menyalin package.json dan package-lock.json ke dalam container
COPY package*.json ./

# Install dependencies menggunakan npm
RUN npm install

# Install Prisma CLI dan generate client
RUN npm install @prisma/cli
RUN npx prisma generate

# Menyalin seluruh file ke dalam container
COPY . .

# Expose port yang digunakan oleh aplikasi
EXPOSE 3000

# Menjalankan aplikasi saat container dijalankan
CMD ["npm", "start"]
