import { useEffect, useRef, useState } from 'react'

const DURATION = 5000

function numericValue(value) {
  const text = String(value).trim()
  return /^\d[\d,]*$/.test(text) ? Number(text.replaceAll(',', '')) : null
}

function AnimatedMetric({ value }) {
  const target = numericValue(value)
  const elementRef = useRef(null)
  const [displayValue, setDisplayValue] = useState(target === null ? value : '0')

  useEffect(() => {
    if (target === null) return undefined

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayValue(value)
      return undefined
    }

    let animationFrame
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return

      observer.disconnect()
      const startedAt = performance.now()

      const tick = (now) => {
        const progress = Math.min((now - startedAt) / DURATION, 1)
        const easedProgress = 1 - Math.pow(1 - progress, 3)
        const currentValue = Math.round(target * easedProgress)

        setDisplayValue(currentValue.toLocaleString('en-US'))
        if (progress < 1) animationFrame = window.requestAnimationFrame(tick)
      }

      animationFrame = window.requestAnimationFrame(tick)
    }, { threshold: 0.45 })

    if (elementRef.current) observer.observe(elementRef.current)

    return () => {
      observer.disconnect()
      window.cancelAnimationFrame(animationFrame)
    }
  }, [target, value])

  return (
    <>
      <strong ref={elementRef} aria-hidden={target !== null}>{displayValue}</strong>
      {target !== null && <span className="sr-only">{value}</span>}
    </>
  )
}

export default AnimatedMetric
