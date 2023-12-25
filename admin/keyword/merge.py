import os
from config import project_path

def merge_and_deduplicate_files(folder_path, output_file_path):
    # 获取文件夹下所有文件的路径
    file_paths = [os.path.join(folder_path, file) for file in os.listdir(folder_path) if os.path.isfile(os.path.join(folder_path, file))]

    # 存储合并后的行数据的集合（用于去重）
    unique_lines = set()

    # 逐个文件读取并合并行数据
    for file_path in file_paths:
        if file_path.endswith(".py"):
            continue
        with open(file_path, 'r', encoding='utf-8') as file:
            lines = file.readlines()
            unique_lines.update(lines)

    # 将合并并去重后的数据写入输出文件
    with open(output_file_path, 'w', encoding='utf-8') as output_file:
        output_file.writelines(unique_lines)

# 用法示例
folder_path = str(project_path) +"/admin/keyword"  # 替换为实际的文件夹路径
output_file_path = "../keywords.txt"  # 替换为实际的输出文件路径
merge_and_deduplicate_files(folder_path, output_file_path)