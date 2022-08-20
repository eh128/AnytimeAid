from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import chromedriver_binary
import time

driver = webdriver.Chrome()
image = r"C:\Users\Steven\Documents\Screenshot 2022-05-22 101510.jpg"
removed_words = ['<li>,a href="">', "</a></li>", "Strong", "</li>"]


def send_image():
    driver.implicitly_wait(10)
    driver.get('https://images.google.com/')
    image_icon = driver.find_element_by_xpath("//div[@aria-label='Search by image']")
    image_icon.click()
    button = driver.find_element_by_name("encoded_image")
    driver.implicitly_wait(10)
    return button


def return_keywords(image_dir, button):
    button.send_keys(image_dir)
    driver.find_element_by_xpath("//div[@aria-label='Visual matches']")
    first_match = driver.find_element_by_xpath("//div[@dir='ltr']").get_attribute("innerHTML")
    print(first_match)
    return first_match


def return_instruction_page(keywords):
    driver.get('https://google.com/')
    search_field = driver.find_element_by_name('q')
    search_field.send_keys(keywords + " instruction how to treat " + "site:mayoclinic.org")
    search_field.send_keys(Keys.ENTER)

    # Only use Mayo Clinic, if it doesn't work then type in keywords
    first_element = driver.find_element_by_id('search')
    first_link = first_element.find_element_by_tag_name('a')
    first_link.click()

    # Find element by ID
    main_content = driver.find_elements_by_tag_name('ol')
    instructions = ""
    for i in range(len(main_content)):
        content = main_content[i].get_attribute("innerHTML")
        instructions = instructions + content


    return instructions


def main():
    button = send_image()
    keywords = return_keywords(image, button)
    instructions = return_instruction_page(keywords)
    for regex in removed_words:
        instructions = instructions.replace(regex, '')
    print(instructions)

main()






