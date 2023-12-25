import os
import re

import easyocr
import time

from PIL import Image

language_list = ['ch_sim', 'en']
reader = easyocr.Reader(language_list)  # this needs to run only once to load the model into memory




def gif_first_frame_to_jpg(gif_path):
    # 提取文件名和路径
    file_name, _ = os.path.splitext(os.path.basename(gif_path))
    jpg_path = os.path.join(os.path.dirname(gif_path), f"{file_name}.jpg")

    # 打开 GIF 文件
    gif_image = Image.open(gif_path)

    # 提取 GIF 的第一帧
    first_frame = gif_image.convert('RGB')

    # 保存第一帧为 JPEG 图像
    first_frame.save(jpg_path, 'JPEG')
    return jpg_path


def get_all_file_paths(directory):
    file_paths = []
    for root, dirs, files in os.walk(directory):
        for file in files:
            file_paths.append(os.path.join(root, file))
    return file_paths


def rename(base_path):
    file_paths = get_all_file_paths(base_path)
    for index, file_path in enumerate(file_paths):
        if contains_chinese(os.path.basename(file_path)):
            continue
        if file_path.endswith("gif") or file_path.endswith("GIF"):
            path = gif_first_frame_to_jpg(file_path)
            new_filepath = renameExec(path, index)
            if os.path.exists(path):
                os.remove(path)
            if new_filepath:
                if os.path.exists(new_filepath):
                    os.remove(new_filepath)
                os.rename(file_path, os.path.splitext(new_filepath)[0] + ".gif")
        else:
            renameExec(file_path, index)


def renameExec(file_path, index):
    result = reader.readtext(file_path, detail=0)
    if not result:
        return
    result = "".join(result)
    if result.startswith("?") or  result.startswith("？"):
        return
    print(result)
    result = re.sub(r'[^\u4e00-\u9fa5a-zA-Z0-9]', '', result)
    new_filepath = os.path.dirname(file_path) + "\\" + result + str(index) + os.path.splitext(file_path)[1]
    if not os.path.exists(new_filepath):
        os.rename(file_path, new_filepath)
    return new_filepath


def contains_chinese(file_name):
    # 使用正则表达式匹配中文字符
    pattern = re.compile('[\u4e00-\u9fa5]')

    # 检查文件名中是否包含中文字符
    if pattern.search(file_name):
        return True
    else:
        return False
if __name__ == "__main__":
    # 替换为你的 GIF 文件路径
    gif_path = "C:\\Users\\admin\\PycharmProjects\\TextCreateVideo\\admin\\4.GIF"
    directory = 'F:\\全部资源\\额外：图片表情包+鬼畜人物语音\\图片表情包'
    image_path = "F:\\emoji\\test\\(300).jpg"
    test_path = "F:\\emoji\\"
    rename(test_path)
    # file_paths = get_all_file_paths(directory)
    # print(file_paths)
    # gif_first_frame_to_jpg(gif_path)
