import { FunctionComponent } from 'react'
import { BeatLoader } from 'react-spinners'

// styles
import Colors from '../../theme/theme.colors'
import { Loading } from './loadingComponent.styles'

const LoadingComponent: FunctionComponent = () => {
  return (
    <Loading>
     <BeatLoader color={Colors.primary} className='loader'/>
    </Loading>
  )
}

export default LoadingComponent
