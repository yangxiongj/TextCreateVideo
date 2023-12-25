import os

from filter_word import DFAFilter, NaiveFilter, BSFilter
from ocr import get_all_file_paths
# 初始化所欲字典
gfw = DFAFilter()
# gfw = NaiveFilter()
# gfw = BSFilter()
gfw.parse("keywords.txt")

def filterImg(path):
    count = 0
    file_paths = get_all_file_paths(path)
    for file_path in file_paths:
        if gfw.filter(os.path.basename(file_path)):
            # print(file_path)
            count += 1
            os.remove(file_path)
        else:
            print(os.path.basename(file_path))
    print(len(file_paths))
    print(count)
if __name__ == '__main__':
    filterImg("F:\表情包合集")