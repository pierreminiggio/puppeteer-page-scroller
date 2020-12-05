/**
 * @param {import("puppeteer").Page} page 
 * @param {number} maxScroll 
 * 
 * @returns {void}
 */
export default async function scroll(page, maxScroll) {
    await page.evaluate(async maxScroll => {
        await new Promise(resolve => {

            const distance = 100
            let scrolledDistance = 0
            
            const timer = setInterval(() => {

                window.scrollBy(0, distance)
                scrolledDistance += distance

                if (scrolledDistance >= maxScroll) {
                    clearInterval(timer)
                    resolve()
                }

            }, 100)
        })
    }, maxScroll)
}
