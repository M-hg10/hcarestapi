# Node.js resmi Alpine tabanlı imajını kullan
FROM node:18-alpine

# Çalışma dizinini ayarla
WORKDIR /app

# package.json ve package-lock.json kopyala
COPY package*.json ./

# Bağımlılıkları yükle
RUN npm install

# Tüm proje dosyalarını kopyala
COPY . .

# Uygulamanın dışarı açacağı port
EXPOSE 4000

# Uygulamayı başlat
CMD ["node", "index.js"]
