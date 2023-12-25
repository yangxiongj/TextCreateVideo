from harvesttext import HarvestText
from typing import List  # 确保导入 List 类型

ht = HarvestText()


def getKeyWords(words: List[str]):
    results_map = {}
    for text in words:
        kwds = ht.extract_keywords(text, 5, method="jieba_tfidf")
        if kwds:
            results_map[text] =  ','.join(kwds)
        else:
            results_map[text] = text
    print(results_map)
    return ','.join(kwds)


if __name__ == '__main__':
    getKeyWords(["先说结论：现代女性的地位只是虚高有一天","有一位土boss突然想泡我"])