export const getDefaultBackendInfo = (url) => {
  const backendInfoMap = {
    'url.v1.mk':
      '肥羊增强型后端，已屏蔽免费节点池（会返回 403），额外支持 vless reality + hysteria + hysteria2 订阅转换',
    'api.v1.mk':
      '肥羊备用后端，已屏蔽免费节点池（会返回 403），额外支持 vless reality + hysteria + hysteria2 订阅转换',
    'api.asailor.org': 'SubConverter-Extended 官方后端，能突破机场的订阅转换限制',
    '127.0.0.1': '本地局域网自建版后端',
  };

  for (const key in backendInfoMap) {
    if (url.indexOf(key) !== -1) {
      return backendInfoMap[key];
    }
  }
};

export const isHtmlResponse = (response) => {
  return response.headers['content-type'] && response.headers['content-type'].includes('text/html');
};
