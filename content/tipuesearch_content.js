var tipuesearch = {"pages": [{'title': 'About', 'text': '設計一甲 \n 40823103 \n 呂霈瑜 \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n we have\xa0 \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'Grouping', 'text': '1a \n wcmg1 組長: 40823131 40823126 40823123 40823124 40823128 \n wcmg2 組長: 40823112 40823108 40823109 40823111 40823145 \n wcmg3 組長: 40823125 40823129 40823137 40823136 40823151 \n wcmg4 組長:\xa040823110 40823103 40823107 40823130 40823142 \n wcmg5 組長:\xa040823143 40823144 40543118 40823127 \n', 'tags': '', 'url': 'Grouping.html'}, {'title': '每周進度', 'text': 'import csv\n \n# read student list\n \nfilename = \'E:/wcm2020/data/tmp/2020_spring_score/2a/2a_list.txt\'\nwith open(filename, encoding="utf-8") as f:\n    content = f.readlines()\n#print(content)\nstudent = [x.strip() for x in content] \n#print(student)\n \n \n# Timestamp, email, 修課名稱, url, score, desp, memo\n# 0, 1, 2, 3, 4, 5, 6\n#total = 0\nall = {}\nwith open(\'y:/2020midterm.csv\', encoding="utf-8") as csv_file:\n    csv_reader = csv.reader(csv_file, delimiter=\',\')\n    #print(csv_reader)\n \n    line_count = 0\n    for row in csv_reader:\n        if line_count == 0:\n            #print(f\'Column names are {", ".join(row)}\')\n            line_count += 1\n        else:\n            student_num = row[1].split("@")[0]\n            #print(student_num)\n            student_score = row[4]\n            #print(student_score)\n            try:\n                all.update({student_num: student_score})\n            except:\n                all.update({student_num: "error"})\n            #print(f\'\\t{row[0]} works in the {row[1]} department, and was born in {row[2]}.\')\n            #print(f\'\\t{row[4]}\')\n            #total += int(row[4])\n            line_count += 1\n#print(all)\n#print(student)\n \n \nfor i in student:\n     \n    #if i in all:\n        #pass\n    #else:\n        #print(str(i))\n     \n    try:\n        print(i + "\\t" + all[i])\n    except:\n        print(i + "\\t60")\n \n    #print(f\'Processed {line_count} lines.\')\n    #print("平均=" + str(total/line_count)) \n', 'tags': '', 'url': '每周進度.html'}, {'title': 'W10-W11', 'text': '利用 Python 程式讀取同學修課檔案, 以及從 Google Sheet 轉出的 .csv, 分別處理為 List 與 Dictionary 資料格式之後, 逐一根據同學 List 學號, 從 Dictionary 取出自評成績. \n import   csv \n \xa0 \xa0 \n # read student list \n \xa0 \xa0 \n filename =  \'E:/wcm2020/data/tmp/2020_spring_score/2a/2a_list.txt\' \n with   open(filename, encoding= "utf-8" )  as   f: \n \xa0\xa0\xa0\xa0 content = f.readlines() \n #print(content) \n student = [x.strip()  for   x  in   content] \n #print(student) \n \xa0 \xa0 \n \xa0 \xa0 \n # Timestamp, email, 修課名稱, url, score, desp, memo \n # 0, 1, 2, 3, 4, 5, 6 \n #total = 0 \n all = {} \n with   open( \'y:/2020midterm.csv\' , encoding= "utf-8" )  as   csv_file: \n \xa0\xa0\xa0\xa0 csv_reader = csv.reader(csv_file, delimiter= \',\' ) \n \xa0\xa0\xa0\xa0 #print(csv_reader) \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 line_count = 0 \n \xa0\xa0\xa0\xa0 for   row  in   csv_reader: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 if   line_count == 0: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 #print(f\'Column names are {", ".join(row)}\') \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 line_count += 1 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 else : \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 student_num = row[1].split( "@" )[0] \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 #print(student_num) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 student_score = row[4] \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 #print(student_score) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 try : \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 all.update({student_num: student_score}) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 except: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 all.update({student_num:  "error" }) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 #print(f\'\\t{row[0]} works in the {row[1]} department, and was born in {row[2]}.\') \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 #print(f\'\\t{row[4]}\') \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 #total += int(row[4]) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 line_count += 1 \n #print(all) \n #print(student) \n \xa0 \xa0 \n \xa0 \xa0 \n for   i  in   student: \n \xa0\xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 #if i in all: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 #pass \n \xa0\xa0\xa0\xa0 #else: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 #print(str(i)) \n \xa0\xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 try : \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 print(i +  "\\t"   + all[i]) \n \xa0\xa0\xa0\xa0 except: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 print(i +  "\\t60" ) \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 #print(f\'Processed {line_count} lines.\') \n \xa0\xa0\xa0\xa0 #print("平均=" + str(total/line_count))', 'tags': '', 'url': 'W10-W11.html'}]};