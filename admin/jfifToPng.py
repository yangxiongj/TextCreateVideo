import os
from typing import List

from PIL import Image
import  requests
from config import project_path

root_dir = r'C:\Users\admin\PycharmProjects\TextCreateVideo\media\中国女性地位提高了吗\picture\\'
base_dir = r'\media\{}\picture\\'
new_size = (1920, 1080)
max_width= 800
background_color = (0, 0, 0)  # 黑色背景
#

#下载图片
def download_image(url:str, name:str):
    file_name = url.split('/')[-1] + '.jfif'
    res_file_path = base_dir.format(name)
    file_path = str(project_path)  + res_file_path
    if not os.path.exists(file_path):
        os.makedirs(file_path)
    #判断文件不存在
    if not os.path.exists(file_path + file_name[:-4]+'png'):
        response = requests.get(url, stream=True)
        with open(file_path + file_name, 'wb') as out_file:
            out_file.write(response.content)
        del response
    return res_file_path + file_name

def convert_and_resize_image(root_dir, new_size,max_width, background_color=(0, 0, 0)):
    for file in os.listdir(root_dir):
        file_path = os.path.join(root_dir, file)
        if os.path.isfile(file_path):  # file
            if (os.path.splitext(file)[-1] == '.jfif'):
                dest_path = os.path.join(root_dir, file.strip('jfif'))
                # 打开原始图片
                img = Image.open(file_path)
                width_percent = max_width / float(img.size[0])
                new_height = int(float(img.size[1]) * float(width_percent))
                img_size = (max_width, new_height)
                # # 将原始图片等比例缩放并粘贴到新图片中
                img = img.resize(img_size, Image.LANCZOS)
                new_image = Image.new("RGB", new_size, background_color)
                # 计算将原始图片居中放置在新图片中的位置
                left = (new_size[0] - img.width) // 2
                top = (new_size[1] - img.height) // 2
                # 将原始图片粘贴到新图片中
                new_image.paste(img, (left, top))

                new_image.save(dest_path + 'png')
                os.remove(file_path)
        else:  # dir
            convert_and_resize_image(file_path,new_size,background_color)

def download_and_convert_image(picture_path_list:List,name:str):
    res=[]
    #判断文件名是否是在线文件
    for picture_path in picture_path_list:
        filepath = picture_path
        if picture_path.startswith('http'):
            filepath = download_image(picture_path,name)
            #下一步会删除原图，保留新图，这里直接放png了
            filepath =  os.path.split(filepath)[0] +"\\"+ os.path.splitext(os.path.basename(filepath))[0] +'.png'
        res.append(filepath)

    file_path = str(project_path)  + base_dir.format(name)
    convert_and_resize_image(file_path,new_size,max_width,background_color)
    return res

if __name__ == '__main__':
    download_and_convert_image(["https://i01piccdn.sogoucdn.com/e31bc9d255039e69","https://i01piccdn.sogoucdn.com/e31bc9d255039e69","https://i01piccdn.sogoucdn.com/e31bc9d255039e69"],'中国女性地位提高了吗')
    # download_image('https://i01piccdn.sogoucdn.com/e31bc9d255039e69',root_dir)
    # convert_and_resize_image(root_dir,new_size,max_width,background_color)