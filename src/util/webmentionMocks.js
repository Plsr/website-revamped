import { faker } from '@faker-js/faker'

export function buildWebMentions(count, desiredType, target) {
  const mentionTypeKeys = ["repostOf", "mentionOf", "likeOf", "inReplyTo", "bookmarkOf"]
  return [...Array(count)].map(_ => {
    const baseMention = { ...mention }

    // Set type for webmention
    mentionTypeKeys.forEach(key => {
      console.log(baseMention[key])
      if (key === desiredType) {
        baseMention[key] = target
      } else {
        baseMention[key] = null
      }
    })

    const randomAuthor = {
      name: faker.name.fullName(),
      photo: faker.internet.avatar(),
      url: faker.internet.url()
    }
    
    baseMention.author = { ...randomAuthor }
    baseMention.content = { text: faker.lorem.text() }
    return baseMention
  })
}

const mention = {
  "author": {
    "name": "Christian Poplawski",
    "photo": "https://source.unsplash.com/user/c_v_r/100x100",
    "url": "http://example.com"
  },
  "wmSource": "https://chris-new-website.netlify.app/blog/third-article",
  "type": "entry",
  "repostOf": null,
  "mentionOf": "https://chris-new-website.netlify.app/blog/second-article/",
  "likeOf": null,
  "inReplyTo": null,
  "bookmarkOf": null,
  "content": {
    "html": "<p>Wow look at all this content. How do they do it?\n<a href=\"https://chris-new-website.netlify.app/blog/second-article/\">test link</a></p>",
    "text": "Wow look at all this content. How do they do it?\ntest link"
  },
  "published": "2021-07-25T00:00:00"
}
