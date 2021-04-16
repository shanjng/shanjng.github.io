import requests
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

chrome_options = Options()
chrome_options.add_argument('--headless')

driver = webdriver.Chrome(options=chrome_options)
driver.get("https://shanjng.github.io/blog")
link_elms = driver.find_elements_by_class_name('post-link')

hrefs = [link_elm.get_attribute("href") for link_elm in link_elms]

print("Going through blog post links...")
print("Printing titles...")
for href in hrefs:
    r = requests.get(href)
    if r.status_code != 200:
        print("Error with blog post link")
        exit(1)
    driver.get(href)
    title = driver.find_element_by_xpath("//div[@class='blog-post']/h1").text
    print(title)