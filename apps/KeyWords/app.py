from admin.harvestText import getKeyWords

class Main:

    def create_key_words(self, text_list: list, tags_list: list ):
        """
        生成关键词和图片
        :return: [{prompt, negative, text, index},...]
        """
        #
        data = []
        res = getKeyWords(text_list)

        for index, value in enumerate(text_list):
            data.append({
                "keywords3": res[value],
                "text": value,
                "index": index
            })

        return data
