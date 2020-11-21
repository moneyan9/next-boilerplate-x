import Button from '@material-ui/core/Button'

const Index = () => (
  <Button
    variant="contained"
    color="primary"
    onClick={() => {
      alert('clicked')
    }}
  >
    CLICK ME!
  </Button>
)

export default Index
