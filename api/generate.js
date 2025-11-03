// 导入 qrcode 库
import qrcode from 'qrcode';

/**
 * Vercel Serverless 函数处理器
 * @param {import('@vercel/node').VercelRequest} request
 * @param {import('@vercel/node').VercelResponse} response
 */
export default async function handler(request, response) {
  // 1. 从查询参数中获取 "url"
  // 示例: /api/generate?url=https://www.google.com
  const { url } = request.query;

  // 检查 URL 是否存在
  if (!url || typeof url !== 'string') {
    response.status(400).json({ error: 'Missing or invalid "url" query parameter' });
    return;
  }

  try {
    // 2. 使用 qrcode 库将 URL 字符串转换为 PNG 图像的 Buffer
    //    我们也可以使用 toDataURL() 来生成 Base64 字符串
    const qrCodeBuffer = await qrcode.toBuffer(url, {
      type: 'png',
      width: 400, // 二维码宽度
      margin: 1,  // 边距
      errorCorrectionLevel: 'H' // 高容错率
    });

    // 3. 将 Buffer 作为图片返回
    
    // 设置响应头为 PNG 图片
    response.setHeader('Content-Type', 'image/png');
    // (可选) 设置缓存，让浏览器缓存这个二维码
    response.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    
    // 发送图片数据
    response.status(200).send(qrCodeBuffer);

  } catch (error) {
    console.error('QR Code generation failed:', error);
    response.status(500).json({ error: 'Failed to generate QR code' });
  }
}