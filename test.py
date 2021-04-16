from selenium import webdriver
driver = webdriver.Chrome()
driver.get("https://shanjng.github.io/blog")
link_elms = driver.find_elements_by_xpath("//a[@href]")
for link_elm in link_elms:
    print(link_elm.get_attribute("href"))
# driver.close()