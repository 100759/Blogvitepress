// 导出配置
module.exports = {
  // 写入配置
  write: {
    // 平台为yuque
    platform: 'notion',
    // notion
    notion: {
      // 从环境变量中获取token
      token: process.env.NOTION_TOKEN,
      // 从环境变量中获取数据库ID
      databaseId: process.env.NOTION_DATABASE_ID,
      // 过滤条件
      filter: true, // {property: 'status', select: {equals: '已发布'}}
      catalog: true, //是否生成目录
      // 图片转base64
      imgToBase64: false,
      },
    
  },
  // 部署配置
  deploy: {
    // 平台为local
    platform: 'local',
    local: {
      // 输出目录为./docs
      outputDir: './posts',
      // 文件名为title
      filename: 'title',
      // 格式为markdown
      format: 'markdown',
      filter: true, // 表示将按照表中的【status】字段进行过滤，保留所有【已发布】的文档
      catalog: true, //是否生成目录
      // 是否启用frontMatter
      frontMatter: {
        enable: true,
        exclude: ['status','catalog'],
      }
    },
    
  },
  // 图片配置
  image: {
    // 是否启用
    enable: false,
    // 平台为local
    platform: 'local',
    local: {
      // 输出目录为./docs/images
      outputDir: './docs/images',
      // 前缀key为/images
      prefixKey: '/images',
      // 是否路径跟随文档
      pathFollowDoc: false,
    },
    // oss配置
    oss: {
      // 从环境变量中获取secretId
      secretId: process.env.OSS_SECRET_ID,
      // 从环境变量中获取secretKey
      secretKey: process.env.OSS_SECRET_KEY,
      // 从环境变量中获取bucket
      bucket: process.env.OSS_BUCKET,
      // 从环境变量中获取region
      region: process.env.OSS_REGION,
      // 从环境变量中获取host
      host: process.env.OSS_HOST,
      // 前缀key为空
      prefixKey: '',
    },
    // cos配置
    cos: {
      // 从环境变量中获取secretId
      secretId: process.env.COS_SECRET_ID,
      // 从环境变量中获取secretKey
      secretKey: process.env.COS_SECRET_KEY,
      // 从环境变量中获取bucket
      bucket: process.env.COS_BUCKET,
      // 从环境变量中获取region
      region: process.env.COS_REGION,
      // 从环境变量中获取host
      host: process.env.COS_HOST,
      // 前缀key为空
      prefixKey: '',
    },
    // qiniu配置
    qiniu: {
      // 从环境变量中获取secretId
      secretId: process.env.QINIU_SECRET_ID,
      // 从环境变量中获取secretKey
      secretKey: process.env.QINIU_SECRET_KEY,
      // 从环境变量中获取bucket
      bucket: process.env.QINIU_BUCKET,
      // 从环境变量中获取region
      region: process.env.QINIU_REGION,
      // 从环境变量中获取host
      host: process.env.QINIU_HOST,
      // 前缀key为空
      prefixKey: '',
    },
    // upyun配置
    upyun: {
      // 从环境变量中获取user
      user: process.env.UPYUN_USER,
      // 从环境变量中获取password
      password: process.env.UPYUN_PASSWORD,
      // 从环境变量中获取bucket
      bucket: process.env.UPYUN_BUCKET,
      // 从环境变量中获取host
      host: process.env.UPYUN_HOST,
      // 前缀key为空
      prefixKey: '',
    },
    // github配置
    github: {
      // 从环境变量中获取token
      token: process.env.GITHUB_TOKEN,
      // 从环境变量中获取user
      user: process.env.ELOG_GITHUB_USER,
      // 从环境变量中获取repo
      repo: process.env.ELOG_GITHUB_REPO,
      // 前缀key为空
      prefixKey: '',
    }
  }
}