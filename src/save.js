import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
  const blockProps = useBlockProps.save();
  return (
    <div {...blockProps}>
      {attributes.image && attributes.image.url && (
        <img src={attributes.image.url} alt="Selected Image" />
      )}
      {attributes.title}
    </div>
  );
}
