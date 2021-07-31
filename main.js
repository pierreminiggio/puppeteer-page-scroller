/**
 * @param {import("puppeteer").Page} page 
 * @param {number} maxScroll
 * @param {?string} selector Will default to window
 * 
 * @returns {void}
 */
export default async function scroll(page, maxScroll, selector = null) {
    await page.evaluate(async (maxScroll, selector) => {
        await new Promise(resolve => {

            const elementToScroll = selector ? document.querySelector(selector) : window
            const distance = 100
            let scrolledDistance = 0
            
            const timer = setInterval(() => {

                elementToScroll.scrollBy(0, distance)
                scrolledDistance += distance

                if (scrolledDistance >= maxScroll) {
                    clearInterval(timer)
                    resolve()
                }

            }, 100)
        })
    }, maxScroll, selector)
}
