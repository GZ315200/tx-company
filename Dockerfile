# 使用Node.js官方镜像作为基础
FROM node:18-alpine

# 设置工作目录
WORKDIR /app

# 复制package.json和package-lock.json（如果有）
COPY package*.json ./


RUN npm install -g pnpm


# 安装依赖
RUN pnpm install

# 复制项目代码
COPY . .

# 构建Next.js应用
RUN npm run build

# 设置默认运行命令
CMD ["npm", "start"]
