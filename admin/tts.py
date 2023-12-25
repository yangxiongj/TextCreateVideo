from typing import List

import edge_tts
import asyncio
from config import project_path
import concurrent.futures
import os

# 入参改为一个List
TEXT_LIST = [
    "有一天，有一位土boss突然想泡我。他的表达方式非常粗爆：发来房号，叫我过去。我拒绝。他问我为什么？我问他为什么？",
    "有一天，有一位土boss突然想泡我。他的表达方式非常粗爆：发来房号，叫我过去。我拒绝。他问我为什么？我问他为什么？",
    "有一天，有一位土boss突然想泡我。他的表达方式非常粗爆：发来房号，叫我过去。我拒绝。他问我为什么？我问他为什么？",
    "有一天，有一位土boss突然想泡我。他的表达方式非常粗爆：发来房号，叫我过去。我拒绝。他问我为什么？我问他为什么？",
    "有一天，有一位土boss突然想泡我。他的表达方式非常粗爆：发来房号，叫我过去。我拒绝。他问我为什么？我问他为什么？",
    "有一天，有一位土boss突然想泡我。他的表达方式非常粗爆：发来房号，叫我过去。我拒绝。他问我为什么？我问他为什么？",
    "有一天，有一位土boss突然想泡我。他的表达方式非常粗爆：发来房号，叫我过去。我拒绝。他问我为什么？我问他为什么？",
    "有一天，有一位土boss突然想泡我。他的表达方式非常粗爆：发来房号，叫我过去。我拒绝。他问我为什么？我问他为什么？",
    "有一天，有一位土boss突然想泡我。他的表达方式非常粗爆：发来房号，叫我过去。我拒绝。他问我为什么？我问他为什么？",
    "有一天，有一位土boss突然想泡我。他的表达方式非常粗爆：发来房号，叫我过去。我拒绝。他问我为什么？我问他为什么？",
    "有一天，有一位土boss突然想泡我。他的表达方式非常粗爆：发来房号，叫我过去。我拒绝。他问我为什么？我问他为什么？",
    "有一天，有一位土boss突然想泡我。他的表达方式非常粗爆：发来房号，叫我过去。我拒绝。他问我为什么？我问他为什么？",
    "有一天，有一位土boss突然想泡我。他的表达方式非常粗爆：发来房号，叫我过去。我拒绝。他问我为什么？我问他为什么？",

    # Add more text items as needed
]

# 以下是可选的声音：选择一个即可
# voice = 'zh-CN-XiaoxiaoNeural'
# voice = 'zh-CN-XiaoyiNeural'
# voice = 'zh-CN-YunjianNeural'
# voice = 'zh-CN-YunxiNeural'
# voice = 'zh-CN-YunxiaNeural'
voice = 'zh-CN-YunyangNeural'
rate = '+10%'  # 音速调整：带+或-号，注意：0%必须写为+0%
volume = '+50%' # 音调调整：带+或-号，注意：0%必须写为+0%

# mp3音频输出路径可自定义
output_path = str(project_path) + '\\media\\{}\\audio\\{}.wav'  # Use {} for both parameters

async def generate_audio(index, name, text):
    output_file = output_path.format( name,index)
    dir_name = os.path.dirname(output_file)
    # Check if the directory exists, if not, create it
    if not os.path.exists(dir_name):
        os.makedirs(dir_name)
    tts = edge_tts.Communicate(text=text, voice=voice, rate=rate, volume=volume)
    await tts.save(output_file)

async def generate(textList:List[str],name:str):
    tasks = []

    # 创建线程池
    with concurrent.futures.ThreadPoolExecutor(max_workers=10) as executor:
        # 启动并发任务
        for index, text in enumerate(textList):
            tasks.append(
                asyncio.ensure_future(generate_audio(index,name, text))
            )

        # 等待所有任务完成
        await asyncio.gather(*tasks)

if __name__ == "__main__":
    import asyncio
    asyncio.run(generate(TEXT_LIST,"test"))