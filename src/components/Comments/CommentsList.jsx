import { motion } from 'framer-motion'
import { AnimatePresence } from "framer-motion"
import { useSelector } from 'react-redux'
import { CommentsItem } from './CommentsItem'

const postsListVariants = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
}

export const CommentsList = () => {
  const detailPost = useSelector((store) => store.detailPost)

  return (
    <>
      {
        detailPost.comments.length ? (
          <motion.div variants={postsListVariants} initial="start" animate="end" fullWidth label="fullWidth" id="fullWidth">
            <AnimatePresence>
              {detailPost.comments.map((comment) => (
                <CommentsItem key={comment._id} {...comment} />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : null
      }
    </>
  )
}
