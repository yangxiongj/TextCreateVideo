import math

import requests
import json
from urllib.parse import quote

def sgreq(keyword):
    # 对关键字进行 URL 编码
    keywords = keyword.split(",")
    res = []
    for k in keywords:
        encoded_keyword = quote(k, safe='')
        # 构建请求 URL
        url = f"https://image.sogou.com/napi/wap/emoji/searchlist?keyword={encoded_keyword}&statref=group-hotword&spver=0&rcer=&tag=0&routeName=emosearch"

        # 发送 GET 请求
        response = requests.get(url)

        # 打印接收到的参数
        data = json.loads(response.content.decode("utf-8"))

        # 遍历获取所有 thumbSrc
        thumb_src_list = [emotion["thumbSrc"] for emotion in data["data"]["emotions"]]
        num_elements = math.ceil(40 / len(keywords))
        # 计算需要截取的元素个数，使用余数进一
        res.extend(thumb_src_list[:num_elements])
    # 返回响应内容
    return res
if __name__ == '__main__':
    sgreq("女性,地位,权力")