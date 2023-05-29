import { __ } from '@wordpress/i18n';
import { TextControl, PanelBody, TabPanel, Tooltip, Media } from '@wordpress/components';
import { useBlockProps, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody title={__('Team Settings')}>

					<TabPanel
						className="my-block-tabs"
						activeClass="active-tab"
						tabs={[
							{
								name: 'general',
								title: __('General'),
								className: 'wp-team-general',
							},
							{
								name: 'style',
								title: __('Style'),
								className: 'Style',
							},
						]}
					>
						{(tab) => (
							<div>
								{tab.name === 'general' && (
									<div>
										<MediaUploadCheck>
											<MediaUpload
												onSelect={(media) => {
													setAttributes({
														image: {
															title: media.title,
															filename: media.filename,
															url: media.url,
														},
													});
												}}
												multiple={false}
												render={({ open }) => (
													<>
														<button onClick={open}>
															{attributes.image === null
																? 'Upload'
																: 'Upload new file'}

															{attributes.image != null && (
																<div>
																	<img src={attributes.image.url} />
																</div>
															)}
														</button>

													</>
												)}
											/>
										</MediaUploadCheck>

										<TextControl
											label={__('Name')}
											value={attributes.title}
											onChange={(newValue) =>
												setAttributes({ title: newValue })
											}
										/>
									</div>
								)}

							</div>
						)}
					</TabPanel>
				</PanelBody>
			</InspectorControls>
			<div>
				{attributes.image != null && (
					<img src={attributes.image.url} alt='cover'/>
				)}
				{attributes.title}
			</div>
		</div>
	);
}
